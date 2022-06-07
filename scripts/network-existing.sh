#!/usr/bin/env bash

# If NETWORK_EXISTING is set to true, copy main.tf and diagnostics.tf from /osdu-azure/templates/osdu-r3-mvp/network_existing/ to /osdu-azure/templates/osdu-r3-mvp/service_resources/
# Else if NETWORK_EXISTING is set to false, echo "NETWORK_EXISTING is set to false, creating new network reousrces"

NETWORK_EXISTING=${1:-"false"}

if [ "${NETWORK_EXISTING}" = "true" ]; then
    echo "NETWORK_EXISTING is set to true, copying main.tf and diagnostics.tf from /osdu-azure/templates/osdu-r3-mvp/network_existing/ to /osdu-azure/templates/osdu-r3-mvp/service_resources/"
    cp /osdu-azure/templates/osdu-r3-mvp/network_existing/main.tf /osdu-azure/templates/osdu-r3-mvp/service_resources/
    cp /osdu-azure/templates/osdu-r3-mvp/network_existing/diagnostics.tf /osdu-azure/templates/osdu-r3-mvp/service_resources/
else
    echo "NETWORK_EXISTING is set to false, creating new network resources"
fi