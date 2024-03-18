import Icon from "../common/Icon";
import DuaAudio from "./DuaAudio";
const bottomIcons = ["copy", "bookmark", "memorize", "share", "report"];

const DuaCard = ({ dua }) => {
  const {
    audio,
    bottom_en,
    cat_id,
    subcat_id,
    refference_en,
    transliteration_en,
    dua_name_en,
    top_en,
    id,
    dua_indopak,
    translation_en,
  } = dua || {};
  return (
    <article className="w-full bg-white rounded-xl p-7">
      <div className="flex items-center gap-3 mb-5">
        <Icon classes={"size-10"} alt={"dua-card"} name={"duacard.svg"} />
        {/* dua_name_en */}
        <h5 className="text-primary font-medium">
          {" "}
          {id}. {dua_name_en}
        </h5>
      </div>
      <div className="space-y-7">
        {top_en && (
          <p className="text-[18px] leading-8 font-medium">{top_en}</p>
        )}
        {dua_indopak && (
          <p className="text-right leading-loose text-3xl pb-4">
            {dua_indopak}
          </p>
        )}
        {transliteration_en && (
          <i className="text-[18px] leading-8">
            {/* transliteration_en */}
            <b>Transliteration: </b>
            <span className="text-gray-900">{transliteration_en}</span>
          </i>
        )}
        {translation_en && (
          <p className="text-[18px] text-gray-800 font-medium">
            {/* translation_en */}
            Translation: {translation_en}
          </p>
        )}
        {bottom_en && (
          <p className="text-[18px] leading-8 font-medium">{bottom_en}</p>
        )}
      </div>
      <div className="my-10 text-[18px]">
        <p className="text-primary font-medium">Reference: </p>
        <p> {refference_en} </p>
      </div>
      <div className="flex items-center justify-between">
        <DuaAudio audioSrc={audio} />
        <div className="flex items-center gap-8">
          {/* bottomIcons */}
          {bottomIcons.map((icon) => (
            <button key={icon}>
              <Icon
                classes={"size-6"}
                key={icon}
                alt={icon}
                name={`${icon}.svg`}
              />
            </button>
          ))}
        </div>
      </div>
    </article>
  );
};

export default DuaCard;
