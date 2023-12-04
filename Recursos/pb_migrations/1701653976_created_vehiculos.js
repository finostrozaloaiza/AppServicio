/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xsnpy6s51m0o7jf",
    "created": "2023-12-04 01:39:36.608Z",
    "updated": "2023-12-04 01:39:36.608Z",
    "name": "vehiculos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gsldbr1p",
        "name": "Patente",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4uhomjq2",
        "name": "Descripcion",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ynpxdnhi",
        "name": "Servicios",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 4,
          "values": [
            "Alineacion",
            "Balanceo",
            "Rotacion",
            "Cambio Aceite"
          ]
        }
      },
      {
        "system": false,
        "id": "t3ngdlrl",
        "name": "Estado",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xsnpy6s51m0o7jf");

  return dao.deleteCollection(collection);
})
