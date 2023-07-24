
import {Route,Routes} from 'react-router-dom';

import NHome from './newpages/newhome';
import NProfile from './newpages/newprofile';
import NLogin from './newpages/newlogin';
import NRegister from './newpages/newregister';
import Signup from './newpages/signup';
import Advp from './newpages/advp';
import Newsletter from './newpages/newsletter';
import Booking from './newpages/booking';
import Request from './newpages/request';
import Choose from './newpages/choose';
import OldHist from './newpages/oldhist';
import SessionHist from './newpages/sessionhist';
import Notification from './newpages/notifications';
import Payment from './newpages/payment';
import Ticketc from './newpages/ticketc';
import TicketD from './newpages/ticketd';
import NewTicket from './newpages/newticket';
import TermsCon from './newpages/termsandconditions';
import FeedBack from './newpages/feedback';
// import Review from './newpages/review';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NLogin/>} />
        <Route path='/newregister' element={<NRegister/>}/>
        <Route path='/newhome' element={<NHome/>}/>
        <Route path='/newprofile' element={<NProfile/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/newsletter' element={<Newsletter/>}/>
        <Route path='/advp' element={<Advp/>}/>
        <Route path='/request' element={<Request/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/choose' element={<Choose/>}/>
        <Route path='/oldhist' element={<OldHist/>}/>
        <Route path='/sessionhist' element={<SessionHist/>}/>
        <Route path='/notifications' element={<Notification/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/ticketc' element={<Ticketc/>}/>
        <Route path='/ticketd' element={<TicketD/>}/>
        <Route path='/newticket' element={<NewTicket/>}/>
        <Route path='/termsandconditions' element={<TermsCon/>}/>
        <Route path='/feedback' element={<FeedBack/>}/>
        {/* <Route path='/review' element={<Review/>}/> */}
      </Routes>
      {/* <NProfile/> */}
    </div>
  );
}

export default App;
