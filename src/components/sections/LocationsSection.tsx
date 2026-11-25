import { Container } from '@/components/ui/Container'
import { LocationCard } from '@/components/ui/LocationCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LOCATIONS } from '@/data/locations'

export function LocationsSection() {
  const isSingleLocation = LOCATIONS.length === 1

  return (
    <section
      id="locations"
      className="border-t border-stone-200/80 bg-white py-24"
    >
      <Container>
        {isSingleLocation ? (
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Location"
                title="Visit Our Coffee Bar"
                subtitle="Drop by for an espresso, slow pour-over, or quiet afternoon coffee."
              />
            </div>
            <div className="lg:col-span-7">
              <LocationCard location={LOCATIONS[0]} featured />
            </div>
          </div>
        ) : (
          <>
            <SectionHeading
              eyebrow="Coffee Bars"
              title="Visit Kape Lokal"
              subtitle="Drop by for an espresso, slow pour-over, or quiet afternoon coffee."
            />

            <div
              className={`mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 ${
                LOCATIONS.length >= 3 ? 'lg:grid-cols-3' : ''
              }`}
            >
              {LOCATIONS.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  )
}
