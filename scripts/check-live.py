"""Check the published HTML and CSS, not just the local build artifact."""
import argparse
import time
import urllib.request


def check_site(base_url):
    checks = {
        "": ('<main ', 'class="bio_record"'),
        "publications/": ('<main ', 'class="pub_details"'),
        "talks/": ('<main ', 'class="talks_list"'),
        "teaching/": ('<main ', 'class="teaching_list"'),
        "assets/site.css": ('.site-header', '.bio_table'),
    }
    for path, markers in checks.items():
        url = base_url.rstrip('/') + '/' + path
        request = urllib.request.Request(url, headers={'Cache-Control': 'no-cache'})
        with urllib.request.urlopen(request, timeout=20) as response:
            body = response.read().decode('utf-8')
            expected_type = 'text/css' if path.endswith('.css') else 'text/html'
            if response.headers.get_content_type() != expected_type:
                raise RuntimeError(f'{url}: expected {expected_type}')
        for marker in markers:
            if marker not in body:
                raise RuntimeError(f'{url}: missing {marker!r}; the published site is incomplete')
        print(f'OK {url}', flush=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('url', nargs='?', default='https://www.victorzamaraev.com/')
    parser.add_argument('--attempts', type=int, default=1)
    parser.add_argument('--interval', type=int, default=10)
    args = parser.parse_args()
    for attempt in range(args.attempts):
        try:
            check_site(args.url)
            break
        except Exception as error:
            print(f'Attempt {attempt + 1}: {error}', flush=True)
            if attempt == args.attempts - 1:
                raise SystemExit(1)
            time.sleep(args.interval)
