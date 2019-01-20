#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""argparse and entry point script for feelsbook server"""

import argparse
import sys
from logging import getLogger

from feelsbook.common import add_log_parser, init_logging

__log__ = getLogger(__name__)


def get_parser() -> argparse.ArgumentParser:
    """Create and return the argparser for feelsbook server"""
    parser = argparse.ArgumentParser(
        description="Start feelsbook server"
    )

    group = parser.add_argument_group("server")

    group.add_argument("-k", "--key", required=True,
                       help="Watson tone analyzer api key")
    group.add_argument("-f", "--filename", required=True,
                       help="File with text to analyze")

    group.add_argument("--debug", action="store_true",
                       help="Run the server in debug mode")

    add_log_parser(parser)

    return parser


def main(argv=sys.argv[1:]) -> int:
    """main entry point feelsbook server"""
    parser  = get_parser()
    args = parser.parse_args(argv)
    init_logging(args, "feelsbook_server.log")

    return 0


if __name__ == "__main__":
    sys.exit(main())

