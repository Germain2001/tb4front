module.exports = function () {
  var data = {
    departamentos: [
      {
        idDepartment: 1,
        NDepartment: "Amazonas",
        provincias: {
          "id": 3,
          NProvince: "Chachapoyas"
        }

      },
      {
        idDepartment: 2,
        NDepartment: "Ancash",
        provincias: {
          "id": 4,
          NProvince: "Suyana"
        }

      },
      {
        idDepartment: 3,
        NDepartment: "Apurimac",
        provincias: {
          "id": 4,
          NProvince: "Suyana"
        }

      },
      {
        idDepartment: 4,
        NDepartment: "Arequipa",
        provincias: {
          "id": 8,
          NProvince: "Abancay"
        }

      },
      {
        idDepartment: 5,
        NDepartment: "Ayacucho",
        provincias: {
          "id": 4,
          NProvince: "Suyana"
        }

      },
      {
        idDepartment: 6,
        NDepartment: "Cajamarca",
        provincias: {
          "id": 7,
          NProvince: "Chota"
        }

      },
      {
        idDepartment: 7,
        NDepartment: "Callao",
        provincias: {
          "id": 6,
          NProvince: "Callao"
        }

      },
      {
        idDepartment: 8,
        NDepartment: "Lima",
        provincias: {
          "id": 1,
          NProvince: "Barranca",
          "id": 2,
          NProvince: "Huarochiri"
        }


      },
      {
        idDepartment: 9,
        NDepartment: "Piura",
        provincias: {
          "id": 4,
          NProvince: "Suyana",
          "id": 5,
          NProvince: "Talara"
        }

      }
    ],
    provincias: [
      {
        id: 1,
        NProvince: "Barranca",
        department: {
          "idDepartment": 8,
          NDepartment: "Lima"
        }
      },
      {
        id: 2,
        NProvince: "Huarochiri",
        department: {
          "idDepartment": 8,
          NDepartment: "Lima"
        }
      },
      {
        id: 3,
        NProvince: "Chachapoyas",
        department: {
          "idDepartmentd": 1,
          NDepartment: "Amazonas"
        }
      },
      {
        id: 4,
        NProvince: "Sullana",
        department: {
          "idDepartment": 9,
          NDepartment: "Piura"
        }
      },
      {
        id: 5,
        NProvince: "Talara",
        department: {
          "idDepartment": 9,
          NDepartment: "Piura"
        }
      },
      {
        id: 6,
        NProvince: "Callao",
        department: {
          "idDepartment": 7,
          NDepartment: "Callao"
        }
      },
      {
        id: 7,
        NProvince: "Chota",
        department: {
          "idDepartment": 6,
          NDepartment: "Cajamarca"
        }
      },
      {
        id: 8,
        NProvince: "Abancay",
        department: {
          "idDepartment": 3,
          NDepartment: "Apurimac"
        }
      }
    ],
    distritos: [
      {
        id: 1,
        NDistrict: "Supe",
        province: {
          "id": 1,
          NProvince: "Barranca"
        }
      },
      {
        id: 2,
        NDistrict: "Conchan",
        province: {
          "id": 7,
          NProvince: "Chota"
        }
      },
      {
        id: 3,
        NDistrict: "Circa",
        province: {
          "id": 8,
          NProvince: "Abancay"
        }
      },
      {
        id: 4,
        NDistrict: "Lobitos",
        province: {
          "id": 5,
          NProvince: "Talara"
        }
      },

      {
        id: 5,
        NDistrict: "Bellavista",
        province: {
          "id": 4,
          NProvince: "Sullana"
        }
      }
    ],
    denuncias: [
      {
        id: 1,
        NComplaint: "Robo",
        policestation: {
          "id": 2,
        NName: "Chacra Colorada" }
      },

      {
        id: 2,
        NComplaint: "Intento de Robo",
        policestation: { "id": 5,
        NName: "San Isidro" }
      },

      {
        id: 3,
        NComplaint: "Robo con pistola",
        policestation: { "id": 6,
        NName: "Policia Nacional del Peru" }
      },

      {
        id: 4,
        NComplaint: "Robo con cuchillo",
        policestation: { "id": 7,
        NName: "Belisario Flores" }
      },

      {
        id: 5,
        NComplaint: "Intento de Robo",
        policestation: { "id": 5,
        NName: "San Isidro" }
      },

      {
        id: 6,
        NComplaint: "Intento de Robo",
        policestation: { "id": 1,
        NName: "Alfonso Ugarte" }
      },

      {
        id: 7,
        NComplaint: "Intento de Robo",
        policestation: { "id": 4,
        NName: "Orrantia del Mar" }
      }

    ],
    personas: [
      {
        CPerson: 1,
        NName: "Pedro",
        NLastName: "Uribe",
        DBirth: "1998-10-15",
        TMail: "pedro@mail.com",
        address: { CAddress: 1 }
      },

      {
        CPerson: 2,
        NName: "Joaquin",
        NLastName: "Cuadros",
        DBirth: "2000-02-01",
        TMail: "joaquin@mail.com",
        address: { CAddress: 4 }
      },

      {
        CPerson: 3,
        NName: "Sofia",
        NLastName: "Vega",
        DBirth: "2002-07-11",
        TMail: "sofia@mail.com",
        address: { CAddress: 3 }
      },

      {
        CPerson: 4,
        NName: "Victor",
        NLastName: "Huertas",
        DBirth: "2001-08-19",
        TMail: "victor@mail.com",
        address: { CAddress: 5 }
      },

      {
        CPerson: 5,
        NName: "Brian",
        NLastName: "Arroyo",
        DBirth: "2000-11-11",
        TMail: "brian@mail.com",
        address: { CAddress: 2 }
      },

      {
        CPerson: 6,
        NName: "Laura",
        NLastName: "Aliaga",
        DBirth: "1996-05-10",
        TMail: "laura@mail.com",
        address: { CAddress: 7 }
      },

      {
        CPerson: 7,
        NName: "Germain",
        NLastName: "Espino",
        DBirth: "2001-08-08",
        TMail: "germain@mail.com",
        address: { CAddress: 6 }
      }
    ],
    comisarias: [
      {
        id: 1,
        address: {
          "id": 1,
          NUrb: "La herradura"
        },
        NName: "Alfonso Ugarte",
        TPhone: "3896503"
      },

      {
        id: 2,
        address: {
          "id": 2,
          NUrb: "Villacampa"
        },
        NName: "Chacra Colorada",
        TPhone: "4812507"
      },

      {
        id: 3,
        address: {
          "id": 3,
          NUrb: "San Felipe"
        },
        NName: "Monserrat PNP",
        TPhone: "7822510"
      },

      {
        id: 4,
        address: {
          "id": 4,
          NUrb: "San Juan"
        },
        NName: "Orrantia del Mar",
        TPhone: "6997414"
      },

      {
        id: 5,
        address: {
          "id": 5,
          NUrb: "Flores"
        },
        NName: "San Isidro",
        TPhone: "4827858"
      },

      {
        id: 6,
        address: {
          "id": 6,
          NUrb: "San German"
        },
        NName: "Policia Nacional del Peru",
        TPhone: "4167310"
      },

      {
        id: 7,
        address: {
          "id": 7,
          NUrb: "Los Sauces"
        },
        NName: "Belisario Flores",
        TPhone: "3896500"
      }
    ],
    usuarios: [
      {
        idUser: 1,
        NUsername: "user1",
        NPassword: "password1"
      },

      {
        idUser: 2,
        NUsername: "user2",
        NPassword: "password2"
      },

      {
        idUser: 3,
        NUsername: "user3",
        NPassword: "password3"
      },

      {
        idUser: 4,
        NUsername: "user4",
        NPassword: "password4"
      },

      {
        idUser: 5,
        NUsername: "user5",
        NPassword: "password5"
      },

      {
        idUser: 6,
        NUsername: "user6",
        NPassword: "password6"
      },

      {
        idUser: 7,
        NUsername: "user7",
        NPassword: "password7"
      }
    ],
    direcciones: [
      {
        id: 1,
        NUrb: "La herradura",
        NStreet: "Calle 1",
        NBlock: "Bloque 7",
        NLot: 1,
        district: { CDistrict: 1 }
      },

      {
        id: 2,
        NUrb: "Villacampa",
        NStreet: "Calle 2",
        NBlock: "Bloque 12",
        NLot: 2,
        district: { CDistrict: 2 }
      },

      {
        id: 3,
        NUrb: "San Felipe",
        NStreet: "Calle 3",
        NBlock: "Bloque 4",
        NLot: 3,
        district: { CDistrict: 3 }
      },

      {
        id: 4,
        NUrb: "San Juan",
        NStreet: "Calle 14",
        NBlock: "Bloque 2",
        NLot: 4,
        district: { CDistrict: 4 }
      },

      {
        id: 5,
        NUrb: "Flores",
        NStreet: "Calle 9",
        NBlock: "Bloque 8",
        NLot: 5,
        district: { CDistrict: 5 }
      },

      {
        id: 6,
        NUrb: "San German",
        NStreet: "Calle 1",
        NBlock: "Bloque 12",
        NLot: 6,
        district: { CDistrict: 6 }
      },

      {
        id: 7,
        NUrb: "Los Sauces",
        NStreet: "Calle 14",
        NBlock: "Bloque 5",
        NLot: 7,
        district: { CDistrict: 7 }
      }
    ],
    roles: [
      {
        id: 1,
        NRol: "Administrador",
      },
      {
        id: 2,
        NRol: "Peaton",
      },
      {
        id: 3,
        NRol: "Conductor",
      }
    ]
  }
  return data
}
