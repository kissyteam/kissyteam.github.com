#!/bin/sh

SPHINXBUILD=sphinx-build
BUILDDIR=docs
ALLSPHINXOPTS="-d ${BUILDDIR}/doctrees ${SPHINXOPTS} source"

echo "sphinx-build -b html ${ALLSPHINXOPTS} ${BUILDDIR}/html"
echo "Build finished. The HTML pages are in %BUILDDIR%/html."
