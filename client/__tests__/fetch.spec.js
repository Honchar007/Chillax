import { getServerSideProps } from "../pages/parties";

const post = {"_id":{"$oid":"60ae80fc218c5fac5bcf47fe"},"title":"SanAdreasBoom","city":"Nikolaev","text":"For boomers","imgUrl":"https://3dnews.ru/assets/external/illustrations/2018/04/09/968154/grand-theft-auto-v.png","bees":false,"street":"000","numberHouse":"21","phone":"380499996565","creator":"SanSan","visitors":[{"name":"SanSan","img":"https://www.meme-arsenal.com/memes/bb75b90d2a8352bc97c507f96c0c795f.jpg"},{"name":"Honchar007","img":"https://avatars.githubusercontent.com/u/54860596?v=4"}],"__v":{"$numberInt":"0"}};

describe("getServerSideProps", () => {
  window.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          status: "success",
          message: post
        })
    })
  );

  it("should call dog api", async () => {
    const response = await getServerSideProps();
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: {
            status: "success",
            message: post
          }
        }
      })
    );
  });
});