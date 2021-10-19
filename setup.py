#**********************************************************
#* CATEGORY	SOFTWARE
#* GROUP	ERPNEXT/FRAPPE
#* AUTHOR	LANCE HAYNIE
#**********************************************************
#Copyright Haynie IPHC, LLC
#Developed by Haynie Research & Development, LLC
#Developed for Lance Haynie, LLC
#Licensed under the Apache License, Version 2.0 (the "License");
#you may not use this file except in compliance with the License.#
#You may obtain a copy of the License at
#http://www.apache.org/licenses/LICENSE-2.0
#Unless required by applicable law or agreed to in writing, software
#distributed under the License is distributed on an "AS IS" BASIS,
#WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#See the License for the specific language governing permissions and
#limitations under the License.
from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

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
