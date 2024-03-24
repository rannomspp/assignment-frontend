# README

## Esimesena jooksutada backend moodul [assignment-app](https://github.com/rannomspp/assignment-app)

**Node versioon**

**The Angular CLI requires a minimum Node.js version of v18.13**

Kood testitud Node versiooniga: **Node v20.6.1**

Juurkaustas ehitamiskäsk, et http://localhost:4200/ URL-lt vaadata frontend osa:

```
ng serve
```

## Sessiooni kirjeldus

Ühe http sessiooni ajal täidetakse sektorite valikmenüü, mille järel saab täita tühjad väljad valikutega -
kui kõik väljad täidetud, saab vajutada Save ja salvestada uue kirjena valik andmebaasis 'sectors' tabelisse.

Peale salvestamise nuppu salvestatakse sessiooni väljad. Kui midagi muuta ja lehekülge taaslaadida/refreshida taastatakse väljadele eelnevalt salvestatud seis.

Juba andmebaasi salvestatud seisu muutes ehk eelnevalt salvestatud sisu väljade muutmine ja salvestamise nupu taasvajutamine, siis uuendatakse andmebaasis viimati salvestatud kirjet.

Uue sessiooni ajal on väljad tühjad ja laseb taas salvestada uue kirjena andmebaasi.
