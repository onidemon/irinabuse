const Excel = require("exceljs");

// customer input
const howMuchMoney = 25000;
const productCost = 1500;
const productHours = 4;
const dedicatedHours = 8;
const weeks = 46;

// constants
const workingDaysPerWeek = 4;
const adminDaysPerWeek = 1;

const acceptInvitation = 0.2;
const acceptSalesCall = 0.3;
const acceptOffer = 0.1;

const timeInvitations = 10;
const timeRelationship = 10;
const timeInviteSalesCall = 5;
const timePerSalesCall = 60;
const timePerSession = 60;
const maxHoursDayConnections = 4;

// Calculations //
// Total clients needed
const numberClients = Math.ceil(howMuchMoney / productCost);

// Total hours needed to deliver product
const hoursToDeliver = (numberClients * timePerSession * productHours) / 60;

// Sales calls needed
const salesCallsNeeded = numberClients / acceptOffer;

// Sales call hours
const salesCallHours = (salesCallsNeeded * timePerSalesCall) / 60;

// Sales call invitations
const salesCallInvitations = Math.ceil(salesCallsNeeded / acceptSalesCall);

// Sales call invitiation Hours
const salesCallInvitationsHours = Math.ceil(
  (salesCallInvitations * timeInviteSalesCall) / 60
);

// connections needed
const connectionsNeeded = salesCallInvitations;

// Relationships building time
const relationshipsTime = Math.ceil(
  (connectionsNeeded * timeRelationship) / 60
);

// Total lead needed
const totalLeadNeeded = Math.ceil(connectionsNeeded / acceptInvitation);

// Sending connections requests in hours
const connectionsReq = Math.ceil((totalLeadNeeded * timeInvitations) / 60);

// Administrative activities
const adminActivities = 5 * weeks;

// Other marketing activites
const marketingActivites = 2 * 5 * weeks;

// Total time needed per year
const totalTimePerYear =
  hoursToDeliver +
  salesCallHours +
  salesCallInvitationsHours +
  relationshipsTime +
  connectionsReq +
  adminActivities +
  marketingActivites;

// Work days needed
const workDaysNeeded = Math.ceil(totalTimePerYear / dedicatedHours);

// Months needed
const monthsNeeded = workDaysNeeded / 20;

async function exTest() {
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet("My Sheet");

  worksheet.columns = [
    { header: "week", key: "week", width: 10 },
    { header: "Connection requests", key: "connectionreq", width: 15 },
    {
      header: "Cummulative connection requests",
      key: "Cummulativeconnectionreq",
      width: 15,
    },
    { header: "time/ request (min)", key: "timereq", width: 15 },
    {
      header: "Total time for connection requests (hours/ week - read comment)",
      key: "totalTimeconnRequests",
      width: 15,
    },
    {
      header: "Message 1 - count",
      key: "message1Count",
      width: 15,
    },
    {
      header: "time/ message 1 (min)",
      key: "timeMessage1",
      width: 15,
    },
    {
      header: "Total time for message 1 (hours/ week)",
      key: "totalTimeMessage1",
      width: 15,
    },
    {
      header: "Message 2 - count",
      key: "message2Count",
      width: 15,
    },
    {
      header: "time/ message 2 (min)",
      key: "timeMessage2",
      width: 15,
    },
    {
      header: "Total time for message 2 (hours/ week)",
      key: "totalTimeMessage2",
      width: 15,
    },
    {
      header: "Message 3- sales call invitation - count",
      key: "message3Count",
      width: 15,
    },
    {
      header: "time/ message 3 (min)",
      key: "timeMessage3",
      width: 15,
    },
    {
      header: "Total time for message 3 (hours/ week)",
      key: "totalTimeMessage3",
      width: 15,
    },
    {
      header: "Sales calls",
      key: "salesCalls",
      width: 15,
    },
    {
      header: "time/ sales call (hours/ week)",
      key: "timeSalesCall",
      width: 15,
    },
    {
      header: "Cummulative sales calls",
      key: "cummulativeSalesCalls",
      width: 15,
    },
    {
      header: "total clients",
      key: "totalClientsCount",
      width: 15,
    },
    {
      header: "current clients",
      key: "currentClients",
      width: 15,
    },
    {
      header: "new clients",
      key: "newClients",
      width: 15,
    },
    {
      header: "new client #",
      key: "newClients#",
      width: 15,
    },
  ];

  const messagesCount = {
    message1Count: [],
    message2Count: [],
    message3Count: [],
  };

  const timereq = timeInvitations;

  let row = 1;

  let prevconnRequests = 0;
  let prevCummulativeSalesCalls = 0;
  let message1Count = 0;
  let message2Count = 0;
  let message3Count = 0;
  let lastWeekTotalClients = 0;

  while (row < 54) {
    if (row === weeks + 3) {
      message2Count = 0;
    }
    if (row <= 3 || row > weeks + 3) {
      message3Count = 0;
    }

    messagesCount.message1Count.push(message1Count);
    messagesCount.message2Count.push(message2Count);
    messagesCount.message3Count.push(message3Count);

    let salesCalls =
      row === 1
        ? 0
        : Math.round(messagesCount.message3Count[row - 2] * acceptInvitation);

    // Data
    const connRequests = Math.round(totalLeadNeeded / weeks);
    const totalTimeconnRequests = (timereq * connRequests) / 60;
    const timeMessage1 = timeRelationship;
    const timeMessage2 = timeRelationship;
    const timeMessage3 = timeInviteSalesCall;
    const totalTimeMessage1 = (timeMessage1 * message1Count) / 60;
    const totalTimeMessage2 = (timeMessage2 * message2Count) / 60;
    const totalTimeMessage3 = (timeMessage3 * message3Count) / 60;

    const timeSalesCall = (timePerSalesCall / 60) * salesCalls;
    const cummulativeSalesCalls = timeSalesCall;

    const totalClientsCount =
      (cummulativeSalesCalls + prevCummulativeSalesCalls) * acceptOffer > 1
        ? Math.round(
            (cummulativeSalesCalls + prevCummulativeSalesCalls) * acceptOffer
          )
        : 0;

    const newClients =
      totalClientsCount - lastWeekTotalClients > 0
        ? totalClientsCount - lastWeekTotalClients
        : 0;

    const currentClients = row === 1 ? 0 : totalClientsCount - newClients;

    lastWeekTotalClients = totalClientsCount;

    if (row <= 4) {
      salesCalls = 0;
    }

    // Add Rows
    if (row <= weeks) {
      worksheet.addRow({
        week: row,
        connectionreq: connRequests,
        Cummulativeconnectionreq: connRequests + prevconnRequests,
        timereq,
        totalTimeconnRequests,
        message1Count,
        timeMessage1,
        totalTimeMessage1,
        message2Count,
        timeMessage2,
        totalTimeMessage2,
        message3Count,
        timeMessage3,
        totalTimeMessage3,
        salesCalls,
        timeSalesCall,
        cummulativeSalesCalls:
          cummulativeSalesCalls + prevCummulativeSalesCalls,
        totalClientsCount,
        newClients,
        currentClients,
      });

      message1Count = Math.ceil(connRequests * acceptInvitation);

      if (row > 1) {
        message2Count = message1Count;
      }
      prevconnRequests = connRequests + prevconnRequests;
    }

    if (row > weeks) {
      worksheet.addRow({
        week: row,
        connectionreq: 0,
        Cummulativeconnectionreq: 0 + prevconnRequests,
        timereq,
        totalTimeconnRequests: 0,
        message1Count,
        timeMessage1,
        totalTimeMessage1,
        message2Count,
        timeMessage2,
        totalTimeMessage2,
        message3Count,
        timeMessage3,
        totalTimeMessage3,
        salesCalls,
        timeSalesCall,
        cummulativeSalesCalls:
          cummulativeSalesCalls + prevCummulativeSalesCalls,
        totalClientsCount,
        newClients,
        currentClients,
      });
      message1Count = 0;
    }
    message3Count = message2Count;

    prevCummulativeSalesCalls =
      cummulativeSalesCalls + prevCummulativeSalesCalls;

    row += 1;
  }
  console.log(messagesCount.message3Count);
  // save under export.xlsx
  await workbook.xlsx.writeFile("export.xlsx");

  //load a copy of export.xlsx

  //   const newWorkbook = new Excel.Workbook();
  //   await newWorkbook.xlsx.readFile('export.xlsx');

  //   const newworksheet = newWorkbook.getWorksheet('My Sheet');
  //   newworksheet.columns = [
  //     { header: 'Id', key: 'id', width: 10 },
  //     { header: 'Name', key: 'name', width: 32 },
  //     { header: 'D.O.B.', key: 'dob', width: 15 },
  //   ];
  //   await newworksheet.addRow({ id: 3, name: 'New Guy', dob: new Date(2000, 1, 1) });

  //   await newWorkbook.xlsx.writeFile('export2.xlsx');

  //   console.log('File is written');
}

exTest();
