# -*- coding: utf-8 -*-

"""flask/cheroot server definition"""

import os
from logging import getLogger
from uuid import uuid4

from flask import Flask, render_template
from flask_restplus import Resource, Api, reqparse

__log__ = getLogger(__name__)

APP = Flask(__name__)


@APP.route('/', methods=["GET"])
def index():
    # parse request arguments
    return render_template('index.html')


API = Api(
    APP,
    version='1.0',
    title='feelsbook API',
    doc='/api/doc',
    description='TODO'
)

sentiments_parser = reqparse.RequestParser()
sentiments_parser.add_argument('token', type=str, help='Watson token')
sentiments_parser.add_argument('filename', type=str,
                                help="File with data")


@API.route('/api/sentiments')
@API.expect(sentiments_parser)
class GetConnections(Resource):
    def post(self):
        args = sentiments_parser.parse_args()
        # call watson
        return {}, 201
