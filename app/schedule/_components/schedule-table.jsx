const ScheduleTable = () => {
  return (
    <>
      <table className="table-responsive-md ck-table mb-5">
        <thead>
          <tr>
            <th></th>
            <th>Понеділок</th>
            <th>Вівторок</th>
            <th>Середа</th>
            <th>Четвер</th>
            <th>П'ятниця</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row_1">
            <td className="event-time"> 08:00 - 09:30</td>
            <td className="event title" rowSpan="2">
              Старша група
            </td>
            <td className="event title" rowSpan="2">
              Старша група
            </td>
            <td className="event title" rowSpan="2">
              Старша група
            </td>
            <td className="event title" rowSpan="2">
              Старша група
            </td>
            <td className="event title" rowSpan="2">
              Старша група
            </td>
          </tr>
          <tr className="row_2">
            <td className="event-time"> 09:30 - 11:00</td>
          </tr>
          <tr className="row_3">
            <td className="event-time"> 13:30 - 15:00</td>
            <td className="event title">Група 6-8 років</td>
            <td></td>
            <td className="event title">Група 6-8 років</td>
            <td></td>
            <td className="event title">Група 6-8 років</td>
          </tr>
          <tr className="row_4">
            <td className="event-time"> 15:00 - 16:30</td>
            <td className="event title">Група 8-10 років</td>
            <td className="event title">Група 8-10 років</td>
            <td className="event title">Група 8-10 років</td>
            <td className="event title">Група 8-10 років</td>
            <td className="event title">Група 8-10 років</td>
          </tr>
          <tr className="row_5">
            <td className="event-time"> 16:30 - 18:00</td>
            <td className="event title">Група 10-14 років</td>
            <td className="event title">Група 10-14 років</td>
            <td className="event title">Група 10-14 років</td>
            <td className="event title">Група 10-14 років</td>
            <td className="event title">Група 10-14 років</td>
          </tr>
          <tr className="row_6">
            <td className="event-time"> 18:00 - 19:30</td>
            <td className="event title" rowSpan="2">
              Старша група
            </td>
            <td className="event title">Старша група</td>
            <td className="event title" rowSpan="2">
              Старша група
            </td>
            <td className="event title">Старша група</td>
            <td className="event title" rowSpan="2">
              Старша група
            </td>
          </tr>
          <tr className="row_7">
            <td className="event-time"> 19:30 - 20:15</td>
            <td className="event title">Група 5-6 років</td>
            <td className="event title">Група 5-6 років</td>
          </tr>
        </tbody>
      </table>
      <table className="table-responsive-md ck-table m-b10">
        <thead>
          <tr>
            <th></th>
            <th>Субота</th>
            <th>Неділя</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row_1">
            <td className="event-time"> 08:00 - 09:30</td>
            <td className="event title" rowSpan="1">
              Старша група
            </td>
            <td className="event title" rowSpan="3">
              Вихідний
            </td>
          </tr>
          <tr className="row_2">
            <td className="event-time"> 10:00 - 11:30</td>
            <td className="event title">Старша група</td>
          </tr>
          <tr className="row_3">
            <td className="event-time"> 11:30 - 13:00</td>
            <td className="event title">Групи 8-10 років та 10-14 років</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ScheduleTable;
