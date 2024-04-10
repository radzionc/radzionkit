variable "name" {
  default = "radzion-email"
}

variable "forward_to" {}

variable "domains" {
  type = list(object({
    domain_name : string
    zone_id     : string
  }))
}

variable "sentry_key" {}