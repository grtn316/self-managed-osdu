output "exist_vnet_name" {
  description = "Virtual network name."
  value       = data.azurerm_virtual_network.exist_vnet.name
}

output "exist_vnet_id" {
  description = "Virtual network id."
  value       = data.azurerm_virtual_network.exist_vnet.id
}

output "sn_id" {
  description = "Object containing subnet ID information."
  value       = {
      fe       = data.azurerm_subnet.exist_sn_fe.id
      aks      = data.azurerm_subnet.exist_sn_aks.id
  }
}

output "aks_rt" {
  description = "Object containing AKS route table information."
  value       = {
      name    = azurerm_route_table.route_table_aks.name
      id      = azurerm_route_table.route_table_aks.id
      subnets = azurerm_route_table.route_table_aks.subnets
  }
}