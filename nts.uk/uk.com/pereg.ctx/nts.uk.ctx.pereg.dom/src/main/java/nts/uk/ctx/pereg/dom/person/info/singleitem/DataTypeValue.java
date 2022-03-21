package nts.uk.ctx.pereg.dom.person.info.singleitem;

import lombok.AllArgsConstructor;
import nts.arc.primitive.constraint.IntegerRange;

@AllArgsConstructor
@IntegerRange(max = 12, min = 1)
public enum DataTypeValue {

	// 1:文字列(String)
	STRING(1),

	// 2:数値(Numeric)
	NUMERIC(2),

	// 3:日付(Date)
	DATE(3),

	// 4:時間(Time)
	TIME(4),

	// 5:時刻(TimePoint)
	TIMEPOINT(5),

	// 6:選択(Selection)
	SELECTION(6),
	
	//7:選択-ラジオボタン(Selection-Radio)
	SELECTION_RADIO(7),
	
	//8:選択-ボタン(Selection-Button)
	SELECTION_BUTTON(8),
	
	//9:表示専用(Readonly)
	
	READONLY(9),
	
	//10: 関連カテゴリ(RelatedCategory)
	RELATE_CATEGORY(10),
	
	//11: 数値-ボタン(Numeric-Button)
	NUMBERIC_BUTTON(11),
	
	//12: 表示専用-ボタン (Readonly-Button)
	READONLY_BUTTON(12);

	public final int value;
}