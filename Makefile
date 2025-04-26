PNPM?=pnpm
PELICANOPTS=-t mytheme

BASEDIR=$(CURDIR)
OUTPUTDIR=output
OUTPUTDIR_PATH=$(BASEDIR)/$(OUTPUTDIR)
PORT?=8000
SITEURL?=http://localhost:$(PORT)

help:
	@echo 'Makefile for a nextjs Web site                                                    '
	@echo '                                                                                  '
	@echo 'Usage:                                                                            '
	@echo '   make html                           (re)generate the web site                  '
	@echo '   make clean                          remove the generated files                 '
	@echo '   make serve [PORT=8000]              starts the application in production mode. '
	@echo '   make devserver [PORT=8000]          starts the application in development mode.'
	@echo ''

html:
	OUTPUTDIR=$(OUTPUTDIR) SITEURL=$(SITEURL) $(PNPM) build

clean:
	[ ! -d $(OUTPUTDIR_PATH) ] || rm -rf $(OUTPUTDIR_PATH)

serve:
	SITEURL=$(SITEURL) $(PNPM) start -p $(PORT)

devserver:
	SITEURL=$(SITEURL) $(PNPM) dev -p $(PORT)

deploy: html

.PHONY: html help clean serve devserver deploy