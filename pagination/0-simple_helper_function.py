#!/usr/bin/env python3

def index_range(page: int, page_size: int) -> tuple:
    """Calcule les indices de début et de fin pour une pagination."""
    start: int = (page - 1) * page_size
    end: int = page * page_size
    return (start, end)
