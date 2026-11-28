/* =====================================================================
   HELP CONTENT – used by BOTH help-redesign.html and help-center.html
   Edit text here once and both pages update.

   id       unique, used in links (help-center.html#id)
   video    YouTube video ID ('' = written guide only)
   intro    first part, shown as the preview
   more     the rest of the guide
   photos   optional: [{ src: 'images/a.jpg', alt: 'What it shows' }]
   ===================================================================== */
const HELP_CATEGORIES = [
  { id: 'rooms',        name: 'Rooms & Availability' },
  { id: 'reservations', name: 'Reservations' },
  { id: 'allocation',   name: 'Room Allocation' },
  { id: 'operations',   name: 'Hotel Operations' },
  { id: 'channels',     name: 'Channels & Guests' }
];

const BRAND = 'Front Desk by eGlobe Solutions';
const KEY = 'Your key to success.';

const HELP_TOPICS = [
{
  id: 'room-availability', category: 'rooms', video: 'x8dyqnWa8Jc',
  title: 'How to Control Room Availability and Manage Room Blocks?',
  subtitle: '',
  intro: `<p>Discover how <strong>Room Blocking &amp; Availability Management</strong> in <strong>Front Desk by eGlobe Solutions</strong> makes room availability and room management simpler, faster, and more efficient.</p>`,
  more: `<h4>In this tutorial, explore how to:</h4>
<ul>
<li>View essential booking details instantly by hovering over a room, including guest information, stay dates, outstanding balance, and booking source.</li>
<li>Block or unblock rooms for maintenance, renovation, or other reasons, with flexible date ranges.</li>
<li>Identify multi-room bookings and guest enquiries directly from the room chart.</li>
<li>Access and manage bookings and guest details with just a click.</li>
</ul>
<div class="callout">Designed to simplify daily hotel operations, Front Desk gives your team better visibility, smoother workflows, and greater control over room inventory — all from one convenient dashboard.</div>`,
  brand: BRAND, tagline: KEY,
  tags: '#eGlobeSolutions #FrontDesk #HotelManagement #HotelSoftware #HotelOperations #RoomManagement #HospitalityTechnology'
},
{
  id: 'direct-booking', category: 'reservations', video: 'x8dyqnWa8Jc',
  title: 'Manage Walk-In, Direct, and Agent Reservations through Direct Booking',
  subtitle: 'Direct Booking | Front Desk by eGlobe Solutions',
  intro: `<p>Manage reservations directly within your front desk with the <strong>Direct Booking</strong> feature in <strong>Front Desk by eGlobe Solutions</strong> — no third-party channel required.</p>`,
  more: `<h4>In this tutorial, learn how to:</h4>
<ul>
<li>Create day-use, hourly, and full-stay reservations with ease.</li>
<li>Apply flexible rate plans, including weekend rates, promotional rates, and more.</li>
<li>Auto-assign rooms or manually select rooms across different room types.</li>
<li>Manage guest profiles and track repeat stays using the built-in CRM.</li>
<li>Apply discounts, taxes, and advance payments in a single booking workflow.</li>
</ul>
<div class="callout">Simplify walk-in and phone reservations, ensure accurate pricing across room types, and create bookings faster with fewer errors.</div>`,
  brand: BRAND, tagline: KEY,
  tags: '#HotelPMS #FrontDesk #eGlobeSolutions #DirectBooking #HotelReservations #HotelManagement #HospitalityTechnology'
},
{
  id: 'drag-and-drop', category: 'allocation', video: 'JJWuC60OYiQ',
  title: 'How to Assign Rooms Easily with Drag and Drop Room Allocation',
  subtitle: 'Drag and Drop Room Allocation | Front Desk by eGlobe Solutions',
  intro: `<p>Reassign confirmed bookings to another room quickly and effortlessly with <strong>Drag and Drop Room Allocation</strong> in <strong>Front Desk by eGlobe Solutions</strong>.</p>`,
  more: `<h4>In this tutorial, learn how to:</h4>
<ul>
<li>Move a reservation between room rows using a simple drag-and-drop action.</li>
<li>Confirm room changes through a confirmation dialog to prevent accidental updates.</li>
<li>Reassign an entire guest stay in a single action.</li>
<li>View booking changes instantly on the visual room chart.</li>
</ul>
<div class="callout">Save time and simplify room reassignment without re-entering guest details or creating a new reservation. Just drag, confirm, and you're done.</div>`,
  brand: BRAND, tagline: KEY,
  tags: '#RoomAllocation #HotelOperations #eGlobeSolutions #RoomManagement #HotelPMS #HotelReservations #HospitalityTechnology'
},
{
  id: 'inventory', category: 'channels', video: 'sMGSu1EfTSg',
  title: 'How to Manage Front Desk Inventory Efficiently',
  subtitle: 'Inventory Management | Front Desk by eGlobe Solutions',
  intro: `<p>Keep your hotel inventory updated across all your channels with the <strong>Inventory Management</strong> feature in <strong>Front Desk by eGlobe Solutions</strong>.</p>`,
  more: `<h4>In this tutorial, learn how to:</h4>
<ul>
<li>Select a date range of up to 90 days for inventory management.</li>
<li>Retrieve live room availability directly from your system.</li>
<li>Push updated inventory to multiple OTA channels simultaneously, including Booking.com, Expedia, Agoda, MakeMyTrip, and more.</li>
<li>Get alerts before overwriting existing inventory to help prevent unintended changes.</li>
</ul>
<div class="callout">Manage inventory more efficiently, keep channels in sync, reduce the risk of overbooking, and maximise booking opportunities across your distribution network.</div>`,
  brand: 'eGlobe Solutions', tagline: KEY,
  tags: '#ChannelManager #HotelOperations #eGlobeSolutions #OTASync #HotelPMS #InventoryManagement #HotelManagement #HospitalityTechnology'
},
{
  id: 'convert-enquiry', category: 'reservations', video: 'prxSE_smNSM',
  title: 'How to Convert Room Enquiries into Confirmed Reservations',
  subtitle: 'Convert to Reservation | Front Desk by eGlobe Solutions',
  intro: `<p>Turn guest enquiries into confirmed bookings quickly and seamlessly with the <strong>Convert to Reservation</strong> feature in <strong>Front Desk by eGlobe Solutions</strong>.</p>`,
  more: `<h4>In this tutorial, learn how to:</h4>
<ul>
<li>Capture and manage room enquiries in one centralised place.</li>
<li>Check live room availability before responding to guests.</li>
<li>Convert an enquiry directly into a reservation without re-entering details.</li>
<li>Track enquiry progress through statuses such as New, In Progress, Converted, and Closed.</li>
</ul>
<div class="callout">Respond faster, streamline your booking process, and turn more enquiries into confirmed reservations — from the first interaction to the guest's stay.</div>`,
  brand: BRAND, tagline: KEY,
  tags: '#HotelPMS #FrontDesk #eGlobeSolutions #RoomEnquiry #HotelBooking #HotelManagement #HospitalityTechnology'
},
{
  id: 'daily-notes', category: 'operations', video: '8GF8IINvwKg',
  title: 'How to Record Daily Operations: Updates and Notes',
  subtitle: 'Daily Operations | Front Desk by eGlobe Solutions',
  intro: `<p>Keep your hotel team aligned and informed every day with the <strong>Daily Operations</strong> feature in <strong>Front Desk by eGlobe Solutions</strong>.</p>`,
  more: `<h4>In this tutorial, learn how to:</h4>
<ul>
<li>Add daily notes with rich-text formatting, including bold text and lists.</li>
<li>Highlight VIP arrivals, maintenance issues, guest requests, and important updates.</li>
<li>Maintain one shared note per day, accessible to your entire team for seamless shift handovers.</li>
<li>Track note activity with a complete audit trail showing who added notes and when.</li>
</ul>
<div class="callout">Make shift handovers smoother, keep your team organised, and ensure important information never gets missed — all from one place.</div>`,
  brand: BRAND, tagline: KEY,
  tags: '#HotelPMS #FrontDesk #eGlobeSolutions #HotelOperations #ShiftHandover #HotelManagement #HospitalityTechnology'
},
{
  id: 'auto-allocation', category: 'allocation', video: 'jFagnCJAIdA',
  title: 'How to Automatically Assign Rooms to Reservations with Auto Room Allocation',
  subtitle: 'Auto Room Allocation | Front Desk by eGlobe Solutions',
  intro: `<p>Automatically assign rooms, save time, and streamline daily hotel operations with <strong>Auto Room Allocation</strong> in <strong>Front Desk by eGlobe Solutions</strong>.</p>`,
  more: `<h4>In this tutorial, learn how to:</h4>
<ul>
<li>View day-wise bookings at a glance for better room allocation planning.</li>
<li>Filter bookings by unallotted rooms, balance due, or day-use stays.</li>
<li>Automatically allot rooms to multiple bookings with a single click.</li>
<li>Download booking lists for reporting, record-keeping, or shift handovers.</li>
</ul>
<div class="callout">Simplify room allocation, improve operational efficiency, and manage bookings more effectively with the tools you need, all in one platform.</div>`,
  brand: 'eGlobe Solutions', tagline: KEY,
  tags: '#RoomAllocation #HotelOperations #eGlobeSolutions #HotelManagement #HotelPMS #HospitalityTechnology #FrontDesk'
},
{
  id: 'service-requests', category: 'operations', video: 'XXTbLEJZ5ew',
  title: 'How to Manage Guest Service Requests Conveniently',
  subtitle: 'Service Requests | Front Desk by eGlobe Solutions',
  intro: `<p>Manage guest requests efficiently from check-in to completion with the <strong>Service Requests</strong> feature in <strong>Front Desk by eGlobe Solutions</strong>.</p>`,
  more: `<h4>In this tutorial, learn how to:</h4>
<ul>
<li>Log service requests directly against any checked-in room.</li>
<li>Select from a range of service categories, including Wi-Fi password, housekeeping, laundry, maintenance, dining, and more.</li>
<li>Add remarks and instructions to help staff handle requests efficiently.</li>
<li>Track service requests and monitor them through to completion.</li>
</ul>
<div class="callout">Improve response times, streamline staff coordination, and deliver a smoother, more satisfying guest experience with organised service request management.</div>`,
  brand: 'eGlobe Solutions', tagline: KEY,
  tags: '#ServiceRequests #HotelOperations #eGlobeSolutions #GuestExperience #HotelPMS #HotelManagement #HospitalityTechnology'
},
{
  id: 'room-operations', category: 'rooms', video: 'V9nji8n0Oiw',
  title: 'How to Monitor and Manage Daily Room Operations',
  subtitle: 'Room Operations | Front Desk by eGlobe Solutions',
  intro: `<p>Manage rooms, bookings, availability, and daily hotel operations from one centralised dashboard with <strong>Room Operations</strong> in <strong>Front Desk by eGlobe Solutions</strong>.</p>`,
  more: `<h4>In this tutorial, learn how to:</h4>
<ul>
<li>Monitor live room statuses at a glance, including Reserved, Occupied, Vacant, Dirty, and Maintenance.</li>
<li>Filter rooms by room type, date, or status for easier management.</li>
<li>Update room status to Clean, Available, or Maintenance with a single click.</li>
<li>Track daily arrivals, departures, and in-house guests.</li>
<li>Quickly create new bookings, block rooms, or apply Stop Sell when needed.</li>
</ul>
<div class="callout">Simplify room management, maintain better control over availability, and keep your hotel's daily operations running smoothly.</div>`,
  brand: 'eGlobe Solutions', tagline: KEY,
  tags: '#RoomOperations #HotelOperations #eGlobeSolutions #HotelManagement #HotelPMS #RoomManagement #HospitalityTechnology'
},
{
  id: 'whatsapp-messaging', category: 'channels', video: 'Q1nQqxzUb70',
  title: 'How to Use Guest Messaging for WhatsApp',
  subtitle: '',
  intro: `<p>The orange <strong>Guest Messaging</strong> button opens the PMS WhatsApp Messaging page, where you can send WhatsApp messages to guests and read their replies.</p>`,
  more: `<p><strong>eGlobe Guest Messaging on WhatsApp</strong> helps hotels streamline guest communication through automated and personalised messages. Connect with guests at every stage of their journey — from booking confirmations and pre-arrival updates to check-in instructions, in-house services, and post-checkout follow-ups.</p>
<p>Improve guest engagement, enhance the guest experience, and simplify hotel operations with smart, seamless communication.</p>`,
  brand: 'eGlobe Solutions', tagline: 'Smarter Hotel Management Through Technology.',
  tags: '#HotelManagement #GuestMessaging #WhatsAppBusiness #HotelTechnology #eGlobeSolutions'
},
{
  id: 'room-tags', category: 'rooms', video: '',
  title: 'How to Filter and Organise Rooms Using Tags',
  subtitle: '',
  intro: `<p><strong>Tag Drop-down</strong><br>Filter rooms by a specific tag, such as floor or view. Select the first option to display all rooms.</p>`,
  more: `<p><strong>Manage Tags</strong><br>PMS administrators can create and manage room tags under <strong>PMS Settings &gt; Manage PMS Rooms</strong>. Click the info icon next to the drop-down for quick access.</p>`
},
{
  id: 'new-guest-booking', category: 'reservations', video: '',
  title: 'How to Create and Manage New Guest Bookings',
  subtitle: '',
  intro: `<p>Click <strong>New Guest Booking</strong> to create a reservation for a guest.</p>`,
  more: `<div class="callout"><strong>Note:</strong> <strong>New Guest Booking</strong>, <strong>Stop Sell</strong>, and <strong>Sync Inventory</strong> require the property-level <strong>Inventory Sync</strong> setting to be enabled. If this setting is disabled, these options will remain unavailable. Contact Support to enable Inventory Sync for your property.</div>`
},
{
  id: 'block-rooms', category: 'rooms', video: '',
  title: 'How to Block and Unblock Rooms for Hotel Operations',
  subtitle: '',
  intro: `<p>Click <strong>Block Rooms</strong> to temporarily remove rooms from sale for selected dates.</p>`,
  more: `<p><strong>Select Action</strong><br>Choose <strong>Block Rooms</strong> or <strong>Un-Block Rooms</strong>, depending on your requirement.</p>
<p><strong>Purpose</strong><br>When blocking rooms, select a purpose: <strong>For Guest Enquiry</strong>, <strong>For Guest Booking</strong>, <strong>For BE Offline Booking</strong>, or <strong>For Maintenance</strong>. Some options may require Support to enable them.</p>
<p><strong>Select Rooms and Dates</strong><br>Choose the rooms you wish to block, then specify the date range (From and Till).</p>
<p><strong>Remarks and Submit</strong><br>Add optional remarks (up to 500 characters) and click <strong>Submit</strong> to complete the action.</p>`
},
{
  id: 'stop-sell', category: 'rooms', video: '',
  title: 'How to Manage Stop Sell and Open Sell',
  subtitle: '',
  intro: `<p><strong>Open the Dialog</strong><br>Click <strong>Stop Sell</strong> to open the dialog.</p>`,
  more: `<p><strong>Select Action</strong><br>Choose <strong>Stop Sell</strong> to close rooms for sale or <strong>Open Sell</strong> to make them available again.</p>
<p><strong>Select Rooms and Dates</strong><br>Select the room types and date range, then click <strong>Submit</strong>.</p>
<p>The update is sent to your connected channels. The <strong>Channel Update Status</strong> window displays the result for each channel.</p>
<div class="callout"><strong>Note:</strong> Dates marked <strong>Stop Sell</strong> cannot accept new bookings or modifications to existing bookings.</div>`
},
{
  id: 'daily-bookings', category: 'reservations', video: '',
  title: 'How to View and Manage Daily Hotel Bookings',
  subtitle: '',
  intro: `<p>The <strong>Bookings for a Date</strong> list displays all bookings scheduled for the selected day.</p>`,
  more: `<p><strong>Include Cancelled Bookings</strong><br>Toggle this option to include cancelled bookings in the list.</p>
<p><strong>Unallotted Bookings</strong><br>Filter the list to display only bookings that have not yet been assigned rooms.</p>
<p><strong>View / Hide Rooms</strong><br>Click the arrow next to the booked rooms to expand or collapse the room details for a booking.</p>`
}
];

/* ----- Shared helpers ----- */
const ytThumb = id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const ytWatch = id => `https://www.youtube.com/watch?v=${id}`;
function ytFrame(id, title) {
  const f = document.createElement('iframe');
  f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  f.title = title;
  f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  f.referrerPolicy = 'strict-origin-when-cross-origin';
  f.allowFullscreen = true;
  return f;
}
