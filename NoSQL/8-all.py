#!/usr/bin/env python3
"""Module to list all documents in a MongoDB collection."""

def list_all(mongo_collection):
    """Lists all documents in a MongoDB collection.

    Args:
        mongo_collection: The pymongo collection object.

    Returns:
        A list of all documents, or an empty list if none.
    """
    return list(mongo_collection.find())
