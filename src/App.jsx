import { Component } from "react";
import PrikazPrekoProps from "./components/PrikazPrekoProps";

class App extends Component {
    state = {
        korisnici: [
            {
                ime: "Branko",
                prezime: "Branković",
                dob: 32,
            },
            {
                ime: "Janko",
                prezime: "Janković",
                dob: 42,
            },
            {
                ime: "Stanko",
                prezime: "Stanković",
                dob: 52,
            },
        ],
        text: "U komponentu APP unutar state defeniran je i Tekstualno Svojstvo ⮚ string ⮘",
    };

    render() {
        const { korisnici, text } = this.state;
        console.log("data from state \n ", korisnici, "\n", text);
        return (
            <>
                <br />
                <table
                    border={1}
                    width="1000px"
                    cellpadding="10"
                    cellspacing="5"
                    align="center"
                >
                    <tr>
                        <th>ime</th>
                        <th>przime </th>
                        <th>dob </th>
                    </tr>
                    {korisnici.map((korisink) => {
                        return (
                            <tr key={korisink.ime}>
                                <td>{korisink.ime}</td>
                                <td>{korisink.prezime}</td>
                                <td>{korisink.dob}</td>
                            </tr>
                        );
                    })}
                </table>
                <br />
                <PrikazPrekoProps text={text} />
            </>
        );
    }
}

export default App;
