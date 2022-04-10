import { ContainerLeft } from "./ContainerLeft";
import { ContainerRight } from "./ContainerRight";
import { useState } from "react";

export const Container = ({ billState, setBillState, numPeople, setNumPeople }) => {
	const [tipAmount, setTipAmount] = useState(0);
	const [totalPerPerson, setTotalPerPerson] = useState(0);
	const [customPercent, setCustomPercent] = useState(0);

	return (
		<div className='container'>
			<ContainerLeft
				billState={billState}
				setBillState={setBillState}
				numPeople={numPeople}
				setNumPeople={setNumPeople}
				tipAmount={tipAmount}
				setTipAmount={setTipAmount}
				totalPerPerson={totalPerPerson}
				setTotalPerPerson={setTotalPerPerson}
				customPercent={customPercent}
				setCustomPercent={setCustomPercent}
			/>
			<ContainerRight
				tipAmount={tipAmount}
				totalPerPerson={totalPerPerson}
				setBillState={setBillState}
				setNumPeople={setNumPeople}
				setTipAmount={setTipAmount}
				setTotalPerPerson={setTotalPerPerson}
				customPercent={customPercent}
				setCustomPercent={setCustomPercent}
			/>
		</div>
	);
};
