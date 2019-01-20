# -*- coding: utf-8 -*-

import argparse

from feelsbook.server.__main__ import get_parser, main


def test_get_parser():
    assert isinstance(get_parser(), argparse.ArgumentParser)


def test_smoke_main():
    assert main(['test', '-k', '123', '-f', 'adf']) == 0
