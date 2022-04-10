export const ContainerLeft = ({
	billState,
	setBillState,
	numPeople,
	setNumPeople,
	setTipAmount,
	setTotalPerPerson,
	customPercent,
	setCustomPercent,
}) => {
	const handleBillState = (evt) => {
		setBillState(parseFloat(evt.target.value));
	};

	const handlePeopleState = (evt) => {
		if (parseInt(evt.target.value) === 0) {
			evt.target.value = "";
			alert("Cannot divide by zero.");
		} else {
			setNumPeople(parseInt(evt.target.value));
		}
	};

	const handlePercentBtn = (percentual) => {
		if (billState && numPeople) {
			const tempTipAmount = billState * (percentual / 100);
			setTipAmount(tempTipAmount);
			let valueDividedByPerson = (billState + tempTipAmount) / numPeople;
			setTotalPerPerson(parseFloat(valueDividedByPerson));
		} else {
			alert('Please insert a number on the fields "Bill" and "Number of People".');
		}
	};

	return (
		<div className='containerLeft'>
			<p>Bill</p>
			<input className='billStateInput' type='number' min='0' placeholder='0' onChange={handleBillState} />
			<p>Select Tip %</p>
			<div className='buttonsGrid'>
				<button className='percBtn' onClick={() => handlePercentBtn(5)}>
					5%
				</button>
				<button className='percBtn' onClick={() => handlePercentBtn(10)}>
					10%
				</button>
				<button className='percBtn' onClick={() => handlePercentBtn(15)}>
					15%
				</button>
				<button className='percBtn' onClick={() => handlePercentBtn(25)}>
					25%
				</button>
				<button className='percBtn' onClick={() => handlePercentBtn(50)}>
					50%
				</button>
				<input
					type='number'
					min='0'
					className='customBtn'
					placeholder='Custom'
					value={customPercent ? `${customPercent}` : ""}
					onChange={(evt) => setCustomPercent(parseFloat(evt.target.value))}
					onBlur={() => {
						if (customPercent) {
							handlePercentBtn(customPercent);
						}
					}}
				/>
			</div>
			<p>Number of People</p>
			<input className='numPeopleInput' type='number' min='0' placeholder='0' onChange={handlePeopleState} />
		</div>
	);
};
