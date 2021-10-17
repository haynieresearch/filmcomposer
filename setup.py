from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in filmcomposer/__init__.py
from filmcomposer import __version__ as version

setup(
	name="filmcomposer",
	version=version,
	description="Film Composer",
	author="Lance Haynie, LLC",
	author_email="contact@lancehayniemusic.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
