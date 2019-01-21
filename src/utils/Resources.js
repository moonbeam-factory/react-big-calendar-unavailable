export const NONE = {}

export default function Resources(resources, accessors) {
  return {
    map(fn) {
      if (!resources) return [fn([NONE, null], 0)]
      return resources.map((resource, idx) =>
        fn([accessors.resourceId(resource), resource], idx)
      )
    },

    groupEvents(events) {
      const eventsByResource = new window.Map()
      events.forEach(event => {
        const id = accessors.resource(event) || NONE
        let resourceEvents = eventsByResource.get(id) || []
        resourceEvents.push(event)
        eventsByResource.set(id, resourceEvents)
      })
      return eventsByResource
    },
  }
}
