import ChangeStyle from "../section/ChangeStyle"
import ChangeTitle from "../section/ChangeTitle"
import CharacterCounter from "../section/CharacterCounter"
import CharacterLimit from "../section/CharacterLimit"
import ConfirmAction from "../section/ConfirmAction"
import CurrencyConverter from "../section/CurrencyConverter"
import FilterName from "../section/FilterName"
import FirstLastName from "../section/FirstLastName"
import TextAlert from "../section/TextAlert"
import TextSize from "../section/TextSize"

export default function MainContent() {
    return (
        <main>
            <CharacterCounter />
            <FilterName />
            <ChangeTitle />
            <FirstLastName />
            <ConfirmAction />
            <ChangeStyle />
            <TextSize />
            <CurrencyConverter />
            <CharacterLimit />
            <TextAlert />
        </main>
    )
}