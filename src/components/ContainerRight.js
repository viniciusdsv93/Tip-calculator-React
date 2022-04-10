export const ContainerRight = ({
	tipAmount,
	totalPerPerson,
	setBillState,
	setNumPeople,
	setTipAmount,
	setTotalPerPerson,
	setCustomPercent,
}) => {
	const handleResetBtn = () => {
		setBillState(0);
		setNumPeople(0);
		setTipAmount(0);
		setTotalPerPerson(0);
		setCustomPercent("");
		document.querySelector(".numPeopleInput").value = "";
		document.querySelector(".billStateInput").value = "";
		document.querySelector(".customBtn").value = "";
	};
	return (
		<div className='containerRight'>
			<div className='containerRight-items'>
				<div className='containerRight-item'>
					<p>
						Tip Amount
						<br />
						<span>/ person</span>
					</p>
					<h1 className='tipAmountValue'>${tipAmount.toFixed(2)}</h1>
				</div>
				<div className='containerRight-item'>
					<p>
						Total
						<br />
						<span>/ person</span>
					</p>
					<h1 className='totalValue'>${totalPerPerson.toFixed(2)}</h1>
				</div>
			</div>
			<button className='containerRight-btn' onClick={handleResetBtn}>
				RESET
			</button>
		</div>
	);
};
