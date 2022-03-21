package nts.uk.ctx.sys.assist.infra.entity.deletedata;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class SspdtCategoryDeletionPK implements Serializable{
	 
	private static final long serialVersionUID = 1L;
	@Basic(optional=false)
	@Column(name = "DEL_ID")
    public String delId;
	
	@Basic(optional=false)
	@Column(name = "CATEGORY_ID")
    public String categoryId;
	
	/**
	 * システム種類
	 */
	@Basic(optional=false)
	@Column(name = "SYSTEM_TYPE")
	public int systemType;
}
