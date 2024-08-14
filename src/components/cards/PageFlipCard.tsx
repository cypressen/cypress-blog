import type { Page } from '@/lib/Interfaces'
const PageFlipCard = ({
  page,
  rootURL,
}: {
  page: Page<any>
  rootURL: string
}) => {
  return (
    <div className="flex items-start justify-between">
      <button className={`btn ${page.currentPage === 1 ? 'btn-disabled' : ''}`}>
        <a href={page.url.first}>{`<<`} </a>
      </button>
      <div className="flex justify-center flex-grow">
        <button
          className={`btn ${page.currentPage === 1 ? 'btn-disabled' : ''}`}
        >
          <a href={page.url.prev}>{`<-`}</a>
        </button>

        <button className="collapse rounded-full bg-gray-700 size-1/6">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium pr-4">
            {page.currentPage} / {page.lastPage}
          </div>
          <div className="collapse-content">
            <input
              id="goToPage"
              type="number"
              placeholder="Go to page"
              min="1"
              max={page.lastPage}
              className="input input-bordered input-success w-full max-w-xs"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const pageIndex = (
                    document.getElementById('goToPage') as HTMLInputElement
                  ).valueAsNumber
                  if (pageIndex <= page.lastPage)
                    window.location.href = `${rootURL}/${
                      pageIndex === 1 ? '' : pageIndex
                    }`
                }
              }}
            />
          </div>
        </button>

        <button
          className={`btn ${
            page.currentPage === page.lastPage ? 'btn-disabled' : ''
          }`}
        >
          <a href={page.url.next}>{`->`}</a>
        </button>
      </div>
      <button
        className={`btn ${
          page.currentPage === page.lastPage ? 'btn-disabled' : ''
        }`}
      >
        <a href={page.url.last}>{`>>`}</a>
      </button>
    </div>
  )
}

export default PageFlipCard
