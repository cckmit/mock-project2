package nts.uk.ctx.basic.infra.entity.training.position;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import nts.uk.shr.infra.data.entity.UkJpaEntity;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "POSITION_CLASSIFICATION")
public class PositionClassification extends UkJpaEntity implements Serializable{

	private static final long serialVersionUID = 1L;

	@EmbeddedId
	public PositionClassificationPK positionClassificationPK;

	@Column(name = "POSTION_NAME")
	public String positionName;

	protected Object getKey() {
		return positionClassificationPK;
	}
}
