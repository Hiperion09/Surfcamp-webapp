import SignupForm from '@/app/_components/Events/SignupForm'
import FeaturedItems from '@/app/_components/FeaturedItems/FeaturedItems';
import { fetchIndividualEvent, fetchDataFromStrapi, fetchAllEvents } from '@/utils/strapi.utils'
import React from 'react'
import ReactMarkdown from 'react-markdown';

async function page({params}) {

  const { eventId } = params;
  const event = await fetchIndividualEvent(eventId);
  const otherEvents = await fetchAllEvents(eventId);
  const descriptionMarkdown = (<ReactMarkdown className='copy'>{event.description}</ReactMarkdown>);
  const pricing = {
    singlePrice: event.singlePrice,
    sharedPrice: event.sharedPrice,
  }


  return (
    <main className="events-page">
      <SignupForm
        headline={event.name}
        infoText={descriptionMarkdown}
        buttonLabel="Sign up"
        pricing={pricing}
        eventId={eventId}
      />
      <FeaturedItems items={otherEvents} itemType='event' headline='Explore our other events'/>
    </main>
  );
}

export async function generateStaticParams() {
    try {
        const events = await fetchDataFromStrapi("events");
        const slugs = events.map((event) => ({
            eventId: String(event.id),
        }));

        return slugs;
    } catch (error) {
        console.log('Error fetching slugs for events:', error);
    }
}

export default page