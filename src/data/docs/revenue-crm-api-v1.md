**Base URL:** `https://crm.consilegy.com/api/v1`

All requests and responses use JSON over HTTPS. Text fields may contain Japanese or any other language.

## Authentication

Create an API key in Revenue CRM under **Settings > API keys** (organization owners and admins only). Keys start with `crm_sk_` and are shown once.

Send the key as a bearer token:

```
Authorization: Bearer crm_sk_xxxxxxxxxxxxxxxx
```

Each key belongs to one organization and has one or both scopes:

| Scope | Allows |
|---|---|
| `read` | `GET` requests |
| `write` | `POST`, `PATCH`, `DELETE` requests |

Keys can be given an expiry date, rotated, and revoked from the same settings page.

## Errors

Errors return a JSON body `{ "error": "<message>" }` with one of these status codes:

| Status | Meaning |
|---|---|
| 400 | Invalid input (for example `name is required`, `invalid stage_id`) |
| 401 | Missing, invalid, expired, or revoked API key |
| 403 | The key lacks the required scope (`insufficient_scope: write`) |
| 404 | Record not found in your organization |
| 500 | Unexpected server error |

IDs that belong to another organization are rejected as invalid, never revealed.

## Pagination

List endpoints accept `limit` (default 100, maximum 1000) and `offset` (default 0), and return:

```json
{ "data": [ ... ], "total": 42, "limit": 100, "offset": 0 }
```

Lists are sorted newest first unless stated otherwise.

---

## Organization

### `GET /me`

Returns the organization the key belongs to and the key's scopes. Use it to test a connection.

```json
{ "organization": { "id": "uuid", "name": "Example Inc." }, "scopes": ["read", "write"] }
```

---

## Contacts

### `GET /contacts`

| Query | Description |
|---|---|
| `limit`, `offset` | Pagination |
| `search` | Partial match on first name, last name, preferred name, English name, or email |

Each item: `id`, `first_name`, `last_name`, `preferred_name`, `english_name`, `email`, `phone`, `job_title`, `lifecycle_stage`, `created_at`, `company` (`{ id, name }` or `null`).

### `POST /contacts` (write)

Body fields (all optional strings unless noted): `first_name`, `last_name`, `preferred_name`, `english_name`, `email`, `phone`, `job_title`, `company_id` (uuid of a company in your organization).

Returns the created contact with status `201`.

### `GET /contacts/{id}`

Returns one contact.

### `PATCH /contacts/{id}` (write)

Updatable fields: `first_name`, `last_name`, `name_order`, `preferred_name`, `english_name`, `email`, `phone`, `job_title`, `company_id`, `notes`, `email_unsubscribed` (boolean). Returns the updated contact.

### `DELETE /contacts/{id}` (write)

Moves the contact to the trash. It can be restored or permanently deleted from the trash in Revenue CRM.

---

## Companies

### `GET /companies`

| Query | Description |
|---|---|
| `limit`, `offset` | Pagination |
| `search` | Partial match on name |

Each item: `id`, `name`, `domain`, `industry`, `employee_count`, `annual_revenue`, `website`, `created_at`.

### `POST /companies` (write)

Body fields: `name` (required), `domain`, `industry`, `employee_count` (integer), `annual_revenue` (number). Returns the created company with status `201`.

### `GET /companies/{id}`

Returns one company.

### `PATCH /companies/{id}` (write)

Updatable fields: `name`, `domain`, `industry`, `employee_count`, `annual_revenue`, `website`, `phone`, `address`.

### `DELETE /companies/{id}` (write)

Moves the company to the trash.

---

## Deals

### `GET /deals`

| Query | Description |
|---|---|
| `limit`, `offset` | Pagination |
| `search` | Partial match on deal name |
| `order` | `created_at_desc` (default), `updated_at_desc`, or `amount_desc` |
| `lang` | `ja`, `en`, or `zh-TW` — language for default stage names |

Each item: `id`, `name`, `amount`, `probability`, `close_date` (YYYY-MM-DD), `forecast_category`, `stage` (`{ id, name, probability }` or `null`), `company` (`{ id, name }` or `null`), `created_at`, `updated_at`.

### `POST /deals` (write)

Body fields: `name` (required), `amount` (number), `probability` (0–100), `close_date` (YYYY-MM-DD), `stage_id` (uuid from `GET /pipelines`), `company_id`, `contact_id`, `forecast_category`. Returns the created deal with status `201`.

### `GET /deals/{id}`

Returns one deal with its stage and company.

### `PATCH /deals/{id}` (write)

Updatable fields: `name`, `amount`, `probability`, `close_date`, `stage_id`, `company_id`, `contact_id`, `forecast_category`, `description`. Moving a deal to another stage is a `PATCH` with a new `stage_id`.

### `DELETE /deals/{id}` (write)

Moves the deal to the trash.

---

## Pipelines

### `GET /pipelines`

Returns the organization's deal pipelines with their stages in board order. Accepts `lang` like `GET /deals`.

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Sales",
      "is_default": true,
      "stages": [
        { "id": "uuid", "name": "Lead", "probability": 10, "position": 0, "is_closed_won": false, "is_closed_lost": false }
      ]
    }
  ]
}
```

---

## Webhooks

Organization admins can register webhook URLs in Revenue CRM (**Settings > Webhooks**) for these events: `contact.created`, `contact.updated`, `contact.deleted`, `company.created`, `company.updated`, `company.deleted`, `deal.created`, `deal.updated`, `deal.deleted`.

Each delivery is a `POST` with:

```json
{ "event": "deal.updated", "data": { ...record }, "timestamp": "2026-10-29T02:00:00.000Z" }
```

Headers: `X-CRM-Event` (event name) and `X-CRM-Signature` (hex HMAC-SHA256 of the raw body, keyed with the webhook's secret). Only public `https` / `http` hosts are accepted.

## Support

Questions about the API: info@consilegy.com
