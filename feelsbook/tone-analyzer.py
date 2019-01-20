from logging import getLogger

from watson_developer_cloud import ToneAnalyzerV3

from typing import List, Dict

__log__ = getLogger(__name__)

Utterance = List[Dict[str, str]]


def analyze_tone(key: str, data: Utterance):
    tone_analyzer: ToneAnalyzerV3 = ToneAnalyzerV3(
        version='{version}',
        iam_apikey=key,
        url="https://gateway.watsonplatform.net/tone-analyzer/api"
    )
    headers = {"content-type": "text/plain"}

import json
from watson_developer_cloud import ToneAnalyzerV3

tone_analyzer = ToneAnalyzerV3(
    version='2017-09-21',
    iam_apikey='{apikey}',
    url='{url}'
)

utterances = [
    {
        "text": "Hello, I'm having a problem with your product.",
        "user": "customer"
    },
    {
        "text": "OK, let me know what's going on, please.",
        "user": "agent"
    },
    {
        "text": "Well, nothing is working :(",
        "user": "customer"
    },
    {
        "text": "Sorry to hear that.",
        "user": "agent"
    }
]

utterance_analyses = tone_analyzer.tone_chat(utterances).get_result()
print(json.dumps(utterance_analyses, indent=2))