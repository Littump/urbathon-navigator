import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import mark from "../assets/greenMark.svg";
import postMark from "../assets/postMark.svg";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";

export default function MapPage() {
  const filters = [
    { value: "events", name: "мероприятия" },
    { value: "posts", name: "посты" },
    { value: "ttk", name: "места накопления" },
  ];
  const navigate = useNavigate();
  const eventsData = [
    { coordinates: [56.794002, 60.549581], icon: mark, href: "/events/1/" },
    { coordinates: [56.784002, 60.569581], icon: mark, href: "/events/2/" },
    { coordinates: [56.784002, 60.559581], icon: mark, href: "/events/3/" },
    { coordinates: [56.784002, 60.599581], icon: mark, href: "/events/4/" },
    { coordinates: [56.783002, 60.569581], icon: mark, href: "/events/5/" },
    { coordinates: [56.78002, 60.559581], icon: mark, href: "/events/6/" },
  ];
  const postsData = [
    { coordinates: [56.794006, 60.549585], icon: postMark, href: "/" },
    { coordinates: [56.794001, 60.569582], icon: postMark, href: "/" },
    { coordinates: [56.794201, 60.529582], icon: postMark, href: "/" },
    { coordinates: [56.793001, 60.599582], icon: postMark, href: "/" },
  ];
  const ttkData = [
    { coordinates: [56.799528, 60.476957], icon: "", href: "#" },
    { coordinates: [56.771602, 60.523474], icon: "", href: "#" },
    { coordinates: [56.789538, 60.50024], icon: "", href: "#" },
    { coordinates: [56.785718, 60.43752], icon: "", href: "#" },
    { coordinates: [56.793338, 60.516194], icon: "", href: "#" },
    { coordinates: [56.8568, 60.540385], icon: "", href: "#" },
    { coordinates: [56.831498, 60.579848], icon: "", href: "#" },
    { coordinates: [56.82150269, 60.52419662], icon: "", href: "#" },
    { coordinates: [56.8465928, 60.5536832], icon: "", href: "#" },
    { coordinates: [56.826, 60.566976], icon: "", href: "#" },
    { coordinates: [56.810423, 60.54972], icon: "", href: "#" },
    { coordinates: [56.816654, 60.527244], icon: "", href: "#" },
    { coordinates: [56.854488, 60.603175], icon: "", href: "#" },
    { coordinates: [56.874639, 60.51335], icon: "", href: "#" },
    { coordinates: [56.860669, 60.308926], icon: "", href: "#" },
    { coordinates: [56.871609, 60.537878], icon: "", href: "#" },
    { coordinates: [56.8748027, 60.5539063], icon: "", href: "#" },
    { coordinates: [56.885481, 60.530601], icon: "", href: "#" },
    { coordinates: [56.858142, 60.647354], icon: "", href: "#" },
    { coordinates: [56.8720333, 60.6801865], icon: "", href: "#" },
    { coordinates: [56.8544675, 60.6690845], icon: "", href: "#" },
    { coordinates: [56.820967, 60.607893], icon: "", href: "#" },
    { coordinates: [56.801223, 60.592782], icon: "", href: "#" },
    { coordinates: [56.814565, 60.720306], icon: "", href: "#" },
    { coordinates: [56.767165, 60.82332], icon: "", href: "#" },
    { coordinates: [56.873191, 60.626911], icon: "", href: "#" },
    { coordinates: [56.877988, 60.576291], icon: "", href: "#" },
    { coordinates: [56.932047, 60.584845], icon: "", href: "#" },
    { coordinates: [56.759695, 60.70898], icon: "", href: "#" },
  ];
  let placemarks = {
    events: eventsData.map((el) => (
      <Placemark
        key={el.coordinates.toString()}
        geometry={el.coordinates}
        options={{
          iconLayout: "default#image",
          iconImageHref: el.icon,
        }}
        onClick={() => {
          navigate(el.href);
        }}
      />
    )),
    posts: postsData.map((el) => (
      <Placemark
        key={el.coordinates.toString()}
        geometry={el.coordinates}
        options={{
          iconLayout: "default#image",
          iconImageHref: el.icon,
        }}
        onClick={() => {
          navigate(el.href);
        }}
      />
    )),
    ttk: ttkData.map((el) => (
      <Placemark
        key={el.coordinates.toString()}
        geometry={el.coordinates}
        onClick={() => {
          navigate(el.href);
        }}
      />
    )),
  };
  return (
    <Formik initialValues={{ filter: "events" }} onSubmit={() => {}}>
      {({ values }) => (
        <Form className="w-full flex-col flex gap-4 font-raleway bg-white py-12 px-5 mx-5 rounded-3xl max-w-[1100px]">
          <div className="bg-white rounded-3xl mx-10">
            <h1 className="text-3xl font-bold mb-6">Активности</h1>
            <YMaps>
              <div className="flex gap-5 w-full">
                <div className="rounded-2xl overflow-hidden w-[700px] h-[440px]">
                  <Map
                    defaultState={{ center: [56.794006, 60.549585], zoom: 12 }}
                    width={700}
                    height={440}
                  >
                    {placemarks[values.filter]}
                  </Map>
                </div>
                <div
                  role="group"
                  className="flex flex-col gap-4"
                  aria-labelledby="my-radio-group"
                >
                  {filters.map((el) => {
                    return (
                      <label
                        key={el.value}
                        className={
                          "w-44 h-12 flex justify-center items-center font-bold text-center rounded-3xl transition hover:shadow-md cursor-pointer " +
                          (values.filter === el.value
                            ? "bg-deep-purple-400 text-white"
                            : "bg-gray-100")
                        }
                      >
                        <Field
                          type="radio"
                          name="filter"
                          value={el.value}
                          className="hidden"
                        />
                        {el.name}
                      </label>
                    );
                  })}
                </div>
              </div>
            </YMaps>
          </div>
        </Form>
      )}
    </Formik>
  );
}
