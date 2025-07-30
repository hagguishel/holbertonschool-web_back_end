#!/usr/bin/env python3
"""
Module 7-to_kv: returns a tuple with a string and the square of a number
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple with the string and the square of the number as float"""
    return (k, float(v * v))
