export const eventsTestData = [
  {
    event: {
      name: 'Top Speed Group (W) - JSL Group (W)',
      homeName: 'Top Speed Group (W)',
      awayName: 'JSL Group (W)',
      start: '2022-03-11T10:39Z',
      group: 'TVL (W)',
      type: 'ET_MATCH',
      sport: 'TENNIS',
      state: 'STARTED',
      liveBetOffers: true,
      openForLiveBetting: true,
      id: 1018495249,
      groupId: 2000112754,
      path: [
        {
          id: 1000093214,
          name: 'Volleyball',
          englishName: 'Volleyball',
        },
        {
          id: 2000112752,
          name: 'Chinese Taipei',
          englishName: 'Chinese Taipei',
        },
        {
          id: 2000112754,
          name: 'TVL (W)',
          englishName: 'TVL (W)',
        },
      ],
    },
    liveData: {
      eventId: 1018495249,
      open: true,
      matchClock: {
        minute: 19,
        second: 28,
        running: true,
      },
      score: {
        home: '18',
        away: '19',
        who: 'AWAY',
      },
      statistics: {
        sets: {
          home: [-1, -1, -1, -1, -1],
          away: [-1, -1, -1, -1, -1],
          homeServe: false,
        },
      },
    },
    mainBetOffer: {
      id: 2318892713,
      eventId: 1018495249,
      main: true,
      live: true,
      startingPrice: false,
      criterion: {
        id: 1001160042,
        label: 'Match Odds',
      },
      betOfferType: {
        id: 2,
        name: 'Match',
        englishName: 'Match',
      },
      outcomes: [
        {
          id: 3075880896,
          odds: 1050,
          label: 'Top Speed Group (W)',
          type: 'OT_ONE',
          changedDate: '2022-03-10T11:59:47Z',
          participant: 'Top Speed Group (W)',
          oddsFractional: '1/20',
          oddsAmerican: '-2000',
        },
        {
          id: 3075880899,
          odds: 9500,
          label: 'JSL Group (W)',
          type: 'OT_TWO',
          changedDate: '2022-03-14T08:59:47Z',
          participant: 'JSL Group (W)',
          oddsFractional: '17/2',
          oddsAmerican: '850',
        },
      ],
      prematch: false,
      cashOutStatus: 'ENABLED',
    },
  },

  {
    event: {
      name: 'Atenas de CÃ³rdoba (W) - Club Banco Provincia (W)',
      homeName: 'Atenas de CÃ³rdoba (W)',
      awayName: 'Club Banco Provincia (W)',
      start: '2022-03-13T23:55Z',
      group: 'Liga Feminina (W)',
      type: 'ET_MATCH',
      sport: 'VOLLEYBALL',
      state: 'STARTED',
      liveBetOffers: true,
      openForLiveBetting: true,
      id: 1018481030,
      groupId: 2000096932,
      path: [
        {
          id: 1000093214,
          name: 'Volleyball',
          englishName: 'Volleyball',
        },
        {
          id: 2000062555,
          name: 'Argentina',
          englishName: 'Argentina',
        },
        {
          id: 2000096932,
          name: 'Liga Feminina (W)',
          englishName: 'Liga Feminina (W)',
        },
      ],
    },
    liveData: {
      eventId: 1018481030,
      open: true,
      matchClock: {
        minute: 94,
        second: 26,
        running: true,
      },
      score: {
        home: '12',
        away: '3',
        who: 'HOME',
      },
      statistics: {
        sets: {
          home: [25, 21, 25, -1, -1],
          away: [18, 25, 20, -1, -1],
          homeServe: true,
        },
      },
    },
    mainBetOffer: {
      id: 2319241247,
      eventId: 1018481030,
      main: true,
      live: true,
      startingPrice: false,
      criterion: {
        id: 1001160042,
        label: 'Match Odds',
      },
      betOfferType: {
        id: 2,
        name: 'Match',
        englishName: 'Match',
      },
      outcomes: [
        {
          id: 3076824587,
          odds: 1000,
          label: 'Atenas de CÃ³rdoba (W)',
          type: 'OT_ONE',
          changedDate: '2022-03-14T01:30:13Z',
          participant: 'Atenas de CÃ³rdoba (W)',
          oddsFractional: '1.00',
          oddsAmerican: '1.00',
        },
        {
          id: 3076824588,
          odds: 61000,
          label: 'Club Banco Provincia (W)',
          type: 'OT_TWO',
          changedDate: '2022-03-14T01:30:13Z',
          participant: 'Club Banco Provincia (W)',
          oddsFractional: '60/1',
          oddsAmerican: '6000',
        },
      ],
      prematch: false,
      cashOutStatus: 'ENABLED',
    },
  },
  {
    event: {
      name: 'Botafogo-SP - Novorizontino-SP',
      homeName: 'Botafogo-SP',
      awayName: 'Novorizontino-SP',
      start: '2022-03-13T23:30Z',
      group: 'Paulista A1',
      type: 'ET_MATCH',
      sport: 'FOOTBALL',
      state: 'STARTED',
      liveBetOffers: true,
      openForLiveBetting: true,
      streamed: true,
      id: 1018472177,
      groupId: 1000094970,
      streams: [
        {
          channelId: 1,
        },
        {
          channelId: 3,
        },
      ],
      path: [
        {
          id: 1000093190,
          name: 'Football',
          englishName: 'Football',
        },
        {
          id: 1000461741,
          name: 'Brazil',
          englishName: 'Brazil',
        },
        {
          id: 1000094970,
          name: 'Paulista A1',
          englishName: 'Paulista A1',
        },
      ],
    },
    liveData: {
      eventId: 1018472177,
      open: true,
      matchClock: {
        minute: 95,
        second: 57,
        running: false,
        period: '2nd half',
      },
      score: {
        home: '2',
        away: '1',
        who: 'UNKNOWN',
      },
      statistics: {
        football: {
          home: {
            yellowCards: 1,
            redCards: 0,
            corners: 1,
          },
          away: {
            yellowCards: 5,
            redCards: 1,
            corners: 3,
          },
        },
      },
    },
  },
];

export const errorMessageUrl = new Error(
  'JSONP server getting https://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=1234&app_key=87643 failed'
);
