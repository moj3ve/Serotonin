PACKAGE_VERSION = 1.0.2
DEBUG = 0
ARCHS = armv7 arm64 arm64e
include $(THEOS)/makefiles/common.mk

LIBRARY_NAME = Serotonin

include $(THEOS_MAKE_PATH)/tweak.mk
