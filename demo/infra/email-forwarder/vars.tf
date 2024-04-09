variable "name" {
  default = "radzion-email"
}

variable "forward_to" {}

variable "zone_id" {}

variable "domains" {
  type = map(object({
    domain_name : string
    zone_id     : string
  }))
}

variable "sentry_key" {}