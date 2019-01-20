from watson_developer_cloud import ToneAnalyzerV3


def analyze_tone(key: str, text: str):
    tone_analyzer: ToneAnalyzerV3 = ToneAnalyzerV3(
        version='{version}',
        iam_apikey=key,
        url="https://gateway.watsonplatform.net/tone-analyzer/api"
    )
    headers = {"content-type": "text/plain"}
