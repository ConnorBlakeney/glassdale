import { CriminalList } from "./criminals/CriminalsList.js"
import { ConvictionSelect } from "./convictions/ConvictionsList.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton, HideNoteButton} from "./notes/NoteButtons.js"
import "./notes/NoteList.js"
import "./criminals/KnownAssociates.js"
import { WitnessButton } from "./witnesses/WitnessBtn.js"
import { FacilitiesButton } from "./facilities/FacilityBtn.js"

CriminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
WitnessButton()
ShowNoteButton()
HideNoteButton()
FacilitiesButton()
