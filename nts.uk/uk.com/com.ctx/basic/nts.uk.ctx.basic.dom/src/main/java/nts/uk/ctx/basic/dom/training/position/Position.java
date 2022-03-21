package nts.uk.ctx.basic.dom.training.position;

import javax.enterprise.inject.New;

import lombok.*;
import nts.arc.layer.dom.objecttype.DomainAggregate;

public class Position implements DomainAggregate {

	/**
	 * Position Code
	 */
	@Getter
	private PositionCode positionCode;
	
	/**
	 * Position Name
	 */
	@Getter
	private PositionName positionName;

	
	/**
	 * 
	 * @param positionCode
	 * @param positionName
	 */
	public Position(PositionCode positionCode, PositionName positionName) {
		super();
		this.positionCode = positionCode;
		this.positionName = positionName;
	}

	/**
	 * 
	 * @param code
	 * @param name
	 * @return
	 */
	public boolean checkExistPosition(PositionCode code, PositionName name) {
//		if( ) {
//			
//			return true;
//		}
//		
		return false;
	}

	public static Position createFromJavaType(String positionCode, String positionName) {
		return new Position(
			new PositionCode(positionCode),
			new PositionName(positionName));
	}

}

