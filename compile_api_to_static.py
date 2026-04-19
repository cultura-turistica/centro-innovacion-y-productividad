import os
import json
import urllib.request
import urllib.parse

output_dir = "public/data/co2"
os.makedirs(output_dir, exist_ok=True)

endpoints = [
    ("macro_continents&year=1980", "macro_continents"), 
    ("cross_2006&year=2024", "cross_2006"), 
    ("scatter&year=2022", "scatter"), 
    ("countries_list", "countries_list")
]

print("Starting to crawl localhost:8000...")

for q, ep in endpoints:
    url = f"http://localhost:8000/api/v1/co2-data?query_type={q}"
    res = urllib.request.urlopen(url).read()
    with open(f"{output_dir}/{ep}.json", "wb") as f:
        f.write(res)
    print(f"Dumped {ep}.json")

countries = json.loads(urllib.request.urlopen("http://localhost:8000/api/v1/co2-data?query_type=countries_list").read())
if "World" not in countries:
    countries.append("World")

for c in countries:
    c_url = urllib.parse.quote(c)
    res = urllib.request.urlopen(f"http://localhost:8000/api/v1/co2-data?query_type=country&country_name={c_url}").read()
    c_name = c.replace(" ", "_").replace("/", "_")
    with open(f"{output_dir}/country_{c_name}.json", "wb") as f:
        f.write(res)

print(f"✅ Downloaded {len(countries)} country JSONs to {output_dir}")
