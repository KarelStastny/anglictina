import React from 'react'

const Info = () => {
  return (
<div>
  <h2>Technický Přehled Aplikace</h2>
  <ul>
    <li>Bezpečnostní Registrace - Komplexní validace hesla zahrnující kontrolu malých a velkých písmen, čísel a speciálních znaků.</li>
    <li>Přihlašovací Funkce - Ověření přihlašovacích údajů uživatelů s možností zobrazení/skrytí hesla pro snadnější zadávání.</li>
    <li>Interaktivní Procvičování Jazyka - Dynamické generování cvičení s možností filtrování podle úrovně a kategorií.</li>
    <li>Dvojstranné Překlady - Efektivní podpora CZ-EN/EN-CZ překladů prostřednictvím uživatelských komponent.</li>
    <li>Customizace Slovíčkových Cvičení - Algoritmus pro personalizaci slovní zásoby dle pokroku uživatele.</li>
    <li>Úroveň Obtížnosti Filtrování - Flexibilní filtr slovíček podle mezinárodních jazykových úrovní (A1-C2).</li>
    <li>Interaktivní Testování - Kvízy a testy s okamžitým vyhodnocením pro efektivní učení.</li>
    <li>Průběžné Sledování Pokroku - Využití kontextových států pro sledování a zobrazení uživatelova pokroku.</li>
    <li>Uživatelský Profil - Možnosti úprav a personalizace, včetně funkce obnovení hesla.</li>
    <li>Responzivní Design - Optimalizace pro různé typy zařízení a velikosti obrazovek.</li>
    <li>Odhlašovací Funkce - Bezpečné odhlášení uživatele s využitím kontextu pro změnu globálního stavu.</li>
    <li>Globální Stavy Uživatele - Efektivní správa a aktualizace uživatelských dat pomocí React Context API.</li>
    <li>Zobrazení Psaného Hesla - Funkce umožňující uživatelům přepnout zobrazení hesla pro zvýšení komfortu při zadávání.</li>
  </ul>
</div>

  )
}

export default Info
