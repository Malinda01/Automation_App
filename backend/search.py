from serpapi import GoogleSearch

API_KEY = "YOUR_SERPAPI_KEY"

def search_company(company):
    params = {
        "engine": "google",
        "q": company,
        "api_key": API_KEY
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    kg = results.get("knowledge_graph", {})

    return {
        "name": kg.get("title", company),
        "website": kg.get("website", "Not found"),
        "founded_year": kg.get("founded", "Unknown"),
        "phone": kg.get("phone", "Not available")
    }
