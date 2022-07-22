# API Morada APP

## Modules
- Usuarios
- Propiedades

## API Reference

### Usuarios

Method | Endpoint       | Data                      | Auth Required
-------| --------       | -----------               | -----------
`POST` | /user/login    | body: {email, password}   | No


### Propiedades

Method | Endpoint       | Data                        | Auth Required
-------| --------       | -----------                 | -----------
`GET ` | /properties      | query: type, business type  | No
`GET ` | /properties/:id  | url: id                     | No
`POST `| /properties      | body: {title, ...}          | Si
`DELETE ` | /properties/:id  | url: id                  | Si
`PUT ` | /properties/:id  | body: {title, ...}          | Si
`POST `| /properties/:id  | body: {comentario}          | Si