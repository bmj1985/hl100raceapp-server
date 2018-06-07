
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('runners')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('runners').insert([
        {
          id: 0,
          bibNumber: 9,
          name: 'Caleb Efta',
          shirtSize: 'Men/s Large',
          locationStaying: 'Camping at start/finish',
          shoeBath: 'Yes, at runner checkin',
          medicalCondition: 'Type I Diabetes',
          medication: 'Sthyroid',
          Started: false,
          RasberryOneIn: '00:00:00',
          RasberryOneOut: '00:00:00',
          AnteroIn: '00:00:00',
          AnteroOut: '00:00:00',
          StElmoOneIn: '00:00:00',
          StElmoOneOut: '00:00:00',
          CottonwoodIn: '00:00:00',
          CottonwoodOut: '00:00:00',
          StElmoTwoIn: '00:00:00',
          StElmoTwoOut: '00:00:00',
          HancockIn: '00:00:00',
          HancockOut: '00:00:00',
          HancockPacerIn: '',
          HancockPacerOut: '',
          LostWonderIn: '00:00:00',
          LostWonderOut: '00:00:00',
          LostWonderPacerIn: '',
          LostWonderPacerOut: '',
          PurgatoryIn: '00:00:00',
          PurgatoryOut: '00:00:00',
          PurgatoryPacerIn: '',
          PurgatoryPacerOut: '',
          MonarchIn: '00:00:00',
          MonarchOut: '00:00:00',
          MonarchPacerIn: '',
          MonarchPacerOut: '',
          FoosesIn: '00:00:00',
          FoosesOut: '00:00:00',
          FoosesPacerIn: '',
          FoosesPacerOut: '',
          BlanksIn: '00:00:00',
          BlanksOut: '00:00:00',
          BlanksPacerIn: '',
          BlanksPacerOut: '',
          RasberryTwoIn: '00:00:00',
          RasberryTwoOut: '00:00:00',
          RasberryTwoPacerIn: '',
          RasberryTwoPacerOut: '',
          Finish: '00:00:00'
        }
      ])
    )
    .then(() => knex.raw('ALTER SEQUENCE runners_id_seq RESTART WITH 10;'))
}
