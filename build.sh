#!/bin/bash
ionic build
ionic cap add android
ionic cap add ios
ionic cap copy
ionic cap open android
ionic cap open ios
