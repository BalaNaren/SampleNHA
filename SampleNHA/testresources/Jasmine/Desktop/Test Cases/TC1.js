it("SampleNHA/TC1", async function() {
	var _data = testcaseData_1641386051467.dataset;
	await kony.automation.playback.waitFor(["SampleNHA/Form1","runTC"]);
	kony.automation.button.click(["SampleNHA/Form1","runTC"]);
	expect(kony.automation.widget.getWidgetProperty(["SampleNHA/Form1","lblResult"], "text")).toEqual(_data.assert.lblResult);
});