#!/usr/bin/env python3

def index_range(page: int, page_size: int) -> tuple:
    """Calcule les indices de début et de fin pour une pagination."""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
