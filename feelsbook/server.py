# -*- coding: utf-8 -*-

"""flask/cheroot server definition"""


from logging import getLogger

from flask import Flask
from flask_restplus import Resource, Api, reqparse

__log__ = getLogger(__name__)

APP = Flask(__name__)

API = Api(
    APP,
    version='1.0',
    title='feelsbook API',
    doc='/api/doc',
    description='TODO'
)

sentiments_parser = reqparse.RequestParser()
sentiments_parser.add_argument('token', type=str, help='Watson token')
sentiments_parser.add_argument('data', type=str,
                                help="Data for analysis")


@API.route('/api/sentiments')
@API.expect(sentiments_parser)
class GetConnections(Resource):
    def post(self):
        args = sentiments_parser.parse_args()
        # call watson
        return {}, 201
